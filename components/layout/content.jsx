import Ad from "components/ad";
import EditorCard from "components/editorCard";
import ArticleCard from "components/articleCard";
import PopularCard from "components/popularCard";
import ReviewCard from "components/reviewCard";
import Section from "components/section";
import TopBrands from "components/topBrands";
import TrendingWeek from "components/trendingWeek";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import Recommendation from "components/recommendation";
import Container from "components/container";

import { getData } from "redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Content() {
  const [current, setCurrent] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    fetch("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
      .then((res) => res.json())
      .then((res) => {
        dispatch(getData(res));
      });
  }, []);

  return (
    <div>
      <Container>
        <Ad width={970} height={50} text="Top Frame 970x50" />
        <Ad width={970} height={250} text="Billboard 970x250" />
        <Section title="Editor's Choice" subtitle="Curated with love">
          {data.editorChoice.map((item, i) => {
            return (
              <EditorCard
                editor={item.editor}
                role={item.role}
                product={item.product}
                key={i}
              />
            );
          })}
        </Section>
      </Container>
      <Recommendation />
      <Container>
        <Ad
          width={970}
          height={250}
          text="Horizontal 970x250 (Internal campaign only)"
        />
        <Section
          title="Latest Articles"
          subtitle="So you can make better purchase decision"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {data.article?.map((item, i) => {
              return <ArticleCard data={item} key={i} />;
            })}
          </div>
        </Section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            width: "100%",
          }}
        >
          <Section
            title="Latest Review"
            subtitle="So you can make better purchase decision"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", gap: "2rem" }}>
                {data.review[current - 1]?.map((item, i) => {
                  return <ReviewCard data={item} key={i} />;
                })}
              </div>
              <Pagination
                total={data.review.length}
                current={current}
                setCurrent={setCurrent}
              />
            </div>
          </Section>
          <Ad height={250} width={300} text="MR 2 (300x250)" />
        </div>
        <Section title="Popular Groups" subtitle="Where the beauty TALK are ">
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {Array.from({ length: 4 }, (_, i) => {
              return <PopularCard key={i} />;
            })}
          </div>
        </Section>
        <Section title="Top Brands" subtitle="We all know and love">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              {Array.from({ length: 6 }, (_, i) => {
                return <TrendingWeek key={i} />;
              })}
            </div>
            <Pagination total={2} current={1} />
          </div>
        </Section>
        <Section title="Top Brands" subtitle="We all know and love">
          <div style={{ marginInline: "auto" }}>
            <TopBrands />
          </div>
        </Section>
        <div style={{ fontSize: "1.2rem" }}>
          <p
            style={{
              fontWeight: 600,
              marginBottom: ".5rem",
            }}
          >
            Female Daily - Find everything you want to know about beauty on
            Female Daily
          </p>
          <p>
            Product Reviews, Tips &amp; Tricks, Expert and Consumer Opinions,
            Beauty Tutorials, Discussions, Beauty Workshops, anything!
          </p>
          <p>
            We are here to be your friendly solution to all things beauty,
            inside and out!
          </p>
        </div>
      </Container>
    </div>
  );
}

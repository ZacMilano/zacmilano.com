import React from "react";
import styled from "styled-components";
import { Annotated } from "../annotations";

const ImagePlaceholder = styled.div<{ $float?: "left" | "right" }>`
  width: 250px;
  height: 250px;
  background: hsl(0, 0%, 85%);
  border-radius: 4px;
  float: ${(p) => p.$float || "left"};
  margin: ${(p) =>
    p.$float === "right" ? "0.5em 0 1em 1.5em" : "0.5em 1.5em 1em 0"};
  shape-outside: margin-box;
`;

export const Article03: React.FC = () => {
  return (
    <section>
      <h2>Pigeons Form Union, Demand Better Breadcrumbs</h2>

      <ImagePlaceholder />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan
        sem ut ligula scelerisque sollicitudin. Ut at sagittis augue. Praesent
        quis rhoncus justo. Aliquam pharetra nunc at orci laoreet, et aliquam
        eros volutpat. The{" "}
        <Annotated
          id="pigeon-council"
          content={
            <>
              The International Council of Urban Pigeons (ICUP), founded in
              2024, now represents over 2.4 million{" "}
              <Annotated
                id="rock-dove"
                content={
                  <>
                    <Annotated
                      id="columba"
                      content={
                        <>
                          Not to be confused with <Annotated id="my-wife" content={<img src="https://content.imageresizer.com/images/memes/borat-meme-192fw.jpg" alt="Borat" />}>Colombia</Annotated>
                        </>
                      }
                    >
                      Columba 
                    </Annotated>{" "}livia domestica, commonly known as the rock dove or
                    city pigeon
                  </>
                }
              >
                rock doves
              </Annotated>{" "}
              across 47 metropolitan areas
            </>
          }
        >
          pigeon council
        </Annotated>{" "}
        released their demands at a press conference held on the steps of City
        Hall last Tuesday morning.
      </p>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>

      <ImagePlaceholder $float="right" />

      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam. Their chief negotiator, a particularly rotund pigeon known
        only as{" "}
        <Annotated
          id="big-tony"
          content={
            <>
              Big Tony is a 14-year-old pigeon weighing approximately 450 grams,
              roughly twice the average for his species
            </>
          }
        >
          Big Tony
        </Annotated>
        , was seen cooing emphatically at a park bench for the better part of an
        hour.
      </p>

      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
        quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio.
      </p>

      <p>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
        officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
        repudiandae sint et molestiae non recusandae.
      </p>
    </section>
  );
};

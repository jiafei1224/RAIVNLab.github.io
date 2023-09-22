import React from "react";
import Latex from "react-latex";
import { Button } from "antd";
import { Helmet } from "react-helmet";
import { css } from "@emotion/react";
import color from "~styles/color";

import Header from "~components/header";
import Hero from "~components/hero";

import publications from "~components/publications.json";

import {
  AiOutlineFilePdf,
  AiFillGithub,
  AiOutlineLink,
  AiFillTrophy,
} from "react-icons/ai";

const ICONS_MAP = {
  pdf: <AiOutlineFilePdf style={{ display: "inline-block" }} />,
  code: (
    <AiFillGithub
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        marginTop: "-1px",
      }}
    />
  ),
  "project page": (
    <AiOutlineLink
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        marginTop: "-1px",
      }}
    />
  ),
};

function Publication(props: {
  title: string;
  authors: string[];
  links: any;
  year: string;
  venue: string;
  award?: string;
  thumbnail?: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-x-3 mb-7 px-5">
      <div>
        {props.thumbnail ? (
          <img src={props.thumbnail} className="w-full sm:mb-0 mb-3" />
        ) : (
          <></>
        )}
      </div>
      <div className="mb-10 sm:mb-0">
        <div className="text-xl">{props.title}</div>
        <div className="text-[15px] mt-1 text-gray-600">
          {props.authors.join(", ")}
        </div>
        <div className="text-[15px] mt-1 text-gray-900">
          {props.venue}
          {props.award ? (
            <span className="text-green-600">
              {" | "}
              <AiFillTrophy
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginTop: "-2px",
                }}
              />{" "}
              <b>{props.award}</b>
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="mt-1 text-[15px]">
          {Object.entries(props.links).map(([key, value]) => (
            <a
              href={value}
              target="_blank"
              className="text-md mr-4 !text-purple-600 !hover:text-purple-900"
            >
              {ICONS_MAP[key]} {key}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * @param {number} a some number.
 * @param {number} b some other number.
 */
export default function Home() {
  console.log(publications);
  let yearGroups = {};
  let preprints = [];
  publications.forEach(pub => {
    let yearInt;
    if (pub.year !== "preprint") {
      // get the int
      yearInt = parseInt(pub.year);
      if (!(pub.year in yearGroups)) {
        yearGroups[yearInt] = [];
      }
      yearGroups[yearInt].push(pub);
    } else {
      preprints.push(pub);
    }
  });

  // for both preprints and yearGroups, sort by if there's a thumbnail
  // randomize within each group
  yearGroups = Object.entries(yearGroups).map(([year, pubs]) => {
    // reverse the order of pubs
    pubs = pubs.reverse();
    pubs = pubs.sort((a, b) => (a.thumbnail ? -1 : 1));
    return [year, pubs];
  });
  // format it back to an object
  yearGroups = Object.fromEntries(yearGroups);

  preprints = preprints.reverse();
  preprints = preprints.sort((a, b) => (a.thumbnail ? -1 : 1));
  console.log(yearGroups);

  return (
    <div>
      <Helmet>
        <title>UW RAIVN Lab Research</title>
      </Helmet>
      <Header />
      <div className="pt-24 ">
        <div className="max-w-5xl mx-auto text-left pb-24 sm:pb-28">
          <div>
            <div className="mb-24">
              <div className="text-3xl text-slate-400 font-medium mt-0 text-center">
                Preprints
              </div>
              <hr className="mb-8 mt-0" />
              {preprints.map(pub => (
                <Publication {...pub} />
              ))}
            </div>
            {Object.keys(yearGroups)
              .sort((a, b) => b - a)
              .map(year => (
                <div className="mb-24">
                  <div className="text-3xl text-slate-400 font-medium mt-8 text-center">
                    {year}
                  </div>
                  <hr className="mb-8 mt-0" />
                  {yearGroups[year].map(pub => (
                    <Publication {...pub} />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

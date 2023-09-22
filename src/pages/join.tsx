import React from "react";
import Latex from "react-latex";
import { Button } from "antd";
import { Helmet } from "react-helmet";
import { css } from "@emotion/react";
import color from "~styles/color";

import Header from "~components/header";
import Hero from "~components/hero";

function Person(props: {
  name: string;
  title: string;
  email?: string;
  additional?: string;
  image: string;
  website?: string;
}) {
  return (
    <div className="inline-block align-top hover:-translate-y-1 duration-150">
      <a
        href={props.website}
        target="_blank"
        className="!hover:cursor-pointer z-10 relative text-inherit hover:text-inherit"
      >
        <div className="rounded-md overflow-hidden border-slate-200 border-[1px] pb-3 bg-white">
          <img src={props.image} className="w-full" />
          <div className="font-medium text-xl text-left mt-2 pl-2">
            {props.name}
          </div>
          <div className="text-sm text-left mt-0 px-2">{props.title}</div>
          <div
            className="text-xs text-left mt-1 px-2 text-slate-400"
            style={{
              fontStyle: props.additional ? "normal" : "italic",
            }}
          >
            {props.email ? props.email : props.additional}
          </div>
        </div>
      </a>
    </div>
  );
}

/**
 * @param {number} a some number.
 * @param {number} b some other number.
 */
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>UW RAIVN LAB Join</title>
      </Helmet>
      <Header />
      <div className="pt-24 mx-5">
        <div className="max-w-5xl mx-auto text-left pb-24 md:pb-28">
          <div>
            <h2 className="h3">Join Us</h2>
            <p>
              If you are an undergrad or masters student at the University of
              Washington and want to work with us, please do the following:
            </p>
            <ol>
              <li>
                1. Fill out{" "}
                <a
                  href="https://forms.gle/iJszFok1VDmpWLy78"
                  target="_blank"
                  className="!text-purple-500"
                >
                  this form
                </a>
              </li>
              <li>2. Email the most relevant person you want to work with</li>
            </ol>
            <p className="mb-10">We look forward to hearing from you!</p>
            <img
              src="/gates_center.jpg"
              className="w-full mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

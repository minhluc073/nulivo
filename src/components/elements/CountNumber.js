"use client";
import CountUp from "react-countup";

export default function CountNumber({ className, count, suffix }) {
  return (
    <CountUp
      className={className}
      end={count}
      decimal=","
      decimals={3}
      duration={2}
    />
  );
}

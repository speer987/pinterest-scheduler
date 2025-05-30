"use client";
import React, { useState } from "react";
export default function Dropdown({ label }) {
  const [selected, setSelected] = useState("");
  return (
    <div className="bg-gray-50 rounded-md flex flex-col p-2 border-1 border-gray-300 gap-1">
      <label className="font-condensed uppercase text-sm tracking-wide">
        {label}
      </label>
      <div className="flex flex-row">
        <select
          className="w-full"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Select Pin Destination</option>
          <option value="one">Option One</option>
          <option value="two">Option Two</option>
          <option value="three">Option Three</option>
        </select>
      </div>
    </div>
  );
}

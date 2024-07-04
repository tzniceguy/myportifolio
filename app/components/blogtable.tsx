import React from "react";

export default function BlogTable() {
  return (
    <div>
      <table className="w-full table-auto text-sm  md:text-md text-left rtl:text-right">
        <thead>
          <tr>
            <th>date</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-marshland-500">
            <td>2024</td>
            <td>journey towards front end development with nextjs</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>Boy Alone</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

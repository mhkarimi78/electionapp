import { ReactElement } from "react";
import Link from "next/link";

interface TableProps {
  data: Array<{
    _hex: string;
  }>;
}

export function ClubTable({ data }: TableProps): ReactElement {
  return (
    <table className="table-auto border-collapse w-full mx-20">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left">Available Elections</th>
          {/* <th className="px-4 py-2 text-left">Name</th> */}
          {/* <th className="px-4 py-2 text-left">Members</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Link
            href={{
              pathname: `/${Number(item._hex + 1)}`,
              query: { electionId: Number(item._hex) + 1 },
            }}
          >
            <tr
              key={item._hex}
              className="border-b flex flex-col items-center hover:bg-gray-100 w-full"
            >
              <td className="px-4 py-2">{Number(item._hex) + 1}</td>
              {/* <td className="px-4 py-2">{item.name}</td> */}
              {/* <td className="px-4 py-2">{item.memberCount.toString()}</td> */}
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  );
}

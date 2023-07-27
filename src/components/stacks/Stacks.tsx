import { Card } from "../ui/card";
import { stacksData } from "../../../utils/StacksData";

export const Stacks = () => {
  return (
    <Card className="flex flex-col gap-4 rounded-[5px] justify-center border-none mt-[1rem]  p-[2rem]  w-[100%] bg-slate-700 bg-opacity-10 ">
      <h3 className="text-2xl font-bold text-center">Skills</h3>
      <div className="h-[110px]">
        <ul className="stacks flex gap-4 overflow-y-auto scroll-auto">
          {stacksData.map((stack, index) => (
            <li key={index} className="flex flex-col items-center gap-2">
              {
                <stack.img
                  title={stack.title}
                  className="flex text-[2.8rem]  sm:text-[4rem] p-2 rounded-full bg-sky-500  "
                />
              }
              <span className="">{stack.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

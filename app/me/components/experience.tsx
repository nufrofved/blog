import { ReactNode } from 'react';

export type Experience = {
  title: ReactNode;
  description?: ReactNode[];
  detail?: Omit<Experience, 'detail'>[];
};

export const ExperienceBlock = ({
  data: { title, description, detail },
}: {
  data: Experience;
}) => {
  return (
    <section key={crypto.randomUUID()} className="grid sm:grid-cols-3 mb-8">
      <div className="sm:col-span-1">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight dark:text-cyan-500">
          {title}
        </h3>
        {description?.map((d) => (
          <p
            key={crypto.randomUUID()}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            {d}
          </p>
        ))}
      </div>
      <div className="sm:col-span-2">
        {detail?.map(({ title, description }) => (
          <div key={crypto.randomUUID()}>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight dark:text-cyan-500 dark:font-bold">
              {title}
            </h4>
            <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">
              {description?.map((d) => (
                <li key={crypto.randomUUID()}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

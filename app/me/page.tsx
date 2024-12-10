import { EDUCATIONAL_EXPERIENCES, WORK_EXPERIENCES } from './constant';

import { ExperienceBlock } from './components/experience';
import { ReactNode } from 'react';

export default function Me() {
  return (
    <>
      <Section>
        <p>
          React와 TypeScript를 기반으로 3년간 프론트엔드 개발 경력을
          쌓아왔습니다.
        </p>
        <p>
          좋은 프론트엔드 개발자는 기획자의 아이디어와 디자이너의 상상력을
          현실로 구현하면서도, 누구나 이해하기 쉬운 코드를 작성해 팀 내에서 대체
          가능한 존재가 되어야 한다고 믿습니다.
        </p>
      </Section>
      <Section>
        <H2>Work Experience</H2>
        {WORK_EXPERIENCES.map((experience) => (
          <ExperienceBlock key={crypto.randomUUID()} data={experience} />
        ))}
      </Section>
      <Section>
        <H2>Education</H2>
        {EDUCATIONAL_EXPERIENCES.map((experience) => (
          <ExperienceBlock key={crypto.randomUUID()} data={experience} />
        ))}
      </Section>
    </>
  );
}

function Section({ children }: Readonly<{ children: ReactNode }>) {
  return <section className="mb-12">{children}</section>;
}

function H2({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

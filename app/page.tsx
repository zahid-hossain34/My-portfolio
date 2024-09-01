import {
  Main,
  MainContainer,
  MainFooter,
  MainGrid,
  MainHeader,
} from "@/components/main";
import { ProjectItem } from "@/components/project";
import { homePageConfig, projectPageConfig } from "@/config";
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";

const HomePage = async () => {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <MainGrid>
          <Main>
            {" "}
            <div className="mx-auto mb-4 text-center">
              <Image
                src={homePageConfig.profileImage ?? ""}
                alt={homePageConfig.profileImageDescription ?? ""}
                width={96}
                height={96}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(256, 256),
                )}`}
                className="mx-auto mb-2 rounded-full bg-gray-100 shadow-sm shadow-gray-800/50 ring-1 ring-gray-900/5  dark:bg-neutral-800/90 dark:ring-white/10"
                priority={true}
              />

              <h1 className="mb-2 text-balance font-calsans text-4xl tracking-tight text-slate-900 dark:text-slate-100">
                {homePageConfig.title}
              </h1>

              <span className="text-balance text-lg leading-8 text-slate-600 dark:text-slate-500">
                {homePageConfig.subTitle}
              </span>
            </div>
            {projectPageConfig.map((project, idx) => (
              <ProjectItem
                project={project}
                isLastItem={idx === projectPageConfig.length - 1}
              />
            ))}
          </Main>
        </MainGrid>
      </MainContainer>
      <MainFooter />
    </>
  );
};

export default HomePage;

import Head from "next/head";

import Container from "@/components/container";
import VfLiveqa from "@/components/viafoura/vf-liveqa";
import VfStandalonePoll from "@/components/viafoura/vf-standalone-poll";

const LIVEQA_CONTAINER_ID = "standalone-poll-liveqa";
const POLL_CONTAINER_ID = "7f0f3b0e-7b0f-4b58-8f61-8a8d47c4c0c2";

export default function StandalonePoll() {
  return (
    <>
      <Head>
        <meta property="vf:section" content="polls" />
        <meta name="vf:container_id" content={POLL_CONTAINER_ID} />
        <title>Standalone Polls</title>
      </Head>
      <Container>
        <div className="mx-auto max-w-4xl py-8">
          <h1 className="text-3xl font-bold">Standalone Polls</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            This page renders the standalone polls widget outside of Engagement
            Starter for quick QA and demos.
          </p>

          <div className="mt-6 rounded border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
            <h2 className="mb-4 text-xl font-semibold">Live Q&A</h2>
            <VfLiveqa vfContainerId={LIVEQA_CONTAINER_ID} />
          </div>

          <div className="mt-6 rounded border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
            <h2 className="mb-4 text-xl font-semibold">Poll</h2>
            <VfStandalonePoll vfContainerId={POLL_CONTAINER_ID} />
          </div>
        </div>
      </Container>
    </>
  );
}

import { useRouter } from "next/router";

export default function IntroSection() {
  const router = useRouter();
  return (
    <p
      className={`h6 my-3 ${
        router.locale === "en" ? `text-start` : `text-end`
      }`}
    >
      An emergency Arab Summit was held in Cairo shortly after the crisis began,
      in October 2000, to establish vital funding support and financial
      mechanisms to help the Palestinian people and its once vibrant economy. A
      decision was taken by the Arab League States to create two financial
      mechanisms to provide immediate social and economic support as well as
      reconstruction funding for the Palestinian people in the short term and to
      strengthen the internal capacity of the PNA in the longer term. With a
      committed capital of US$1 billion, two funds were created – the Al Aqsa
      and Al Quds Funds. Both Funds were entrusted to IsDB to manage. In
      addition, the Arab funds has made a decision in Damscus 2011 to allocate
      yearly 10% of their annual profits In favor of the efforts exerted to
      alleviate the suffering of the Palestinian people.
    </p>
  );
}

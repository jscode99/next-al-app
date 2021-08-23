import style from "./index.module.sass";

export default function FundIndicator({ data }) {
  return (
    <div className="mx-5">
      <div
        className={`${style.fund_indecator} ${data.bg} rounded-circle mb-4 d-flex justify-content-center align-items-center text-white`}
      >
        {data.count}
      </div>
      <p className={`${style.fund_title} ${data.font} text-center`}>
        {data.text}
      </p>
    </div>
  );
}

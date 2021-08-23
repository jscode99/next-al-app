import { useEffect, useState } from "react";
import { Row, Col, Pagination } from "antd";

//Styles
import style from "./index.module.sass";

export default function PaginationSection({
  listData,
  listSize,
  pageNumber,
  setPageNumber,
}) {
  // State of total
  const [total, setTotal] = useState(listData.length);
  // Setting total
  useEffect(() => {
    if (listData && listData.length > 0) setTotal(listData.length);
  }, [total, listData]);
  return (
    <div className={`${style.pagination_container} d-flex align-items-center`}>
      <Row className={`w-100`}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={`d-flex justify-content-center`}>
            <div>
              <Pagination
                className={`${style.pagination}`}
                onChange={pageNumber => setPageNumber(pageNumber)}
                total={total}
                hideOnSinglePage={true}
                pageSize={listSize}
                current={pageNumber}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

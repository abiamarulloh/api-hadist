import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import queryString from "query-string";
import { useEffect, useState } from "react";
import styles from "../styles/detail-hadits.module.css";

function DetailHadits() {
  const [dataDetailHadits, setDataDetailHadits] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    handlehaditsOnLoad();
  }, []);

  const handlehaditsOnLoad = () => {
    const { id, haditsType } = queryString.parse(router.asPath.split(/\?/)[1]);
    const params = {
      hadits: textConverter(haditsType, "_", "-"),
      id: id
    };
    getDetailHadits(params);
  };

  const getDetailHadits = (params) => {
    const  { id, hadits } = params
    fetch(
      `/api/hadist/${hadits}/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataDetailHadits(data);
        setLoading(false);
      });
  };

   const textConverter = (text, separator, expectSeparator) => {
     return text ? text.split(separator).join(expectSeparator) : text
  };

   const handleLoader = (event) => {
    if (isLoading) {
      return (
        <div className="wrapLoading">
          <div className="loading">
            <FontAwesomeIcon icon="spinner" size="lg" spin />
          </div>
        </div>
      );
    }
  };

  if (!dataDetailHadits) return <p>No hadits data</p>;

  return (
    <>
      {isLoading ? (
        handleLoader()
      ) : (
        <div className={styles.detailHaditsWrapper}>
          <div className={styles.detailHadits}>
              <h3>{textConverter(dataDetailHadits.kitab, "_", " ")}</h3>
              <p dir="rtl">
                {dataDetailHadits.arab}
              </p>
              <p>
                {dataDetailHadits.terjemah}
              </p>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailHadits;

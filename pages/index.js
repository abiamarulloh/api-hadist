import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "../styles/index.module.css";

function HomePage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [dataSearch, setSearch] = useState("");
  const [dataHaditsType, setHaditsType] = useState("shahih-bukhari");
  const [dataSuggestion, setSuggestion] = useState();
  const listSuggestion = [
    "hadits tentang berqur'ban",
    "hadits tentang zakat",
    "hadits tentang Infaq",
    "hadits tentang Puasa senin kamis",
    "hadits tentang Puasa Arafah",
    "hadits tentang Puasa Tarwiyah",
    "hadits tentang menikah",
    "hadits tentang bercerai",
  ];
  const [isShowModalSearch, setShowModalSearch] = useState(false);

  const listHadits = [
    {
      type: "shahih-bukhari",
      name: "Shahih Bukhari",
    },
    {
      type: "shahih-muslim",
      name: "Shahih muslim",
    },
    {
      type: "sunan-tirmidzi",
      name: "Sunan Tirmidzi",
    },
  ];

  useEffect(() => {
    setLoading(true);
    handlehaditsOnLoad();

    // Initialize
    setSuggestion("hadits tentang berqur'ban");
  }, []);

  const handlehaditsOnLoad = () => {
    const params = {
      hadits: dataHaditsType,
      page: "",
      search: dataSearch,
    };
    getHadits(params);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = {
      hadits: dataHaditsType,
      page: "",
      search: dataSearch,
    };
    getHadits(params);
  };

  const getHadits = (params) => {
    fetch(
      `/api/hadist/${params.hadits}?page=${params.page}&search=${params.search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setShowModalSearch(false);
      });
  };

  const changeHadits = (haditsType) => {
    const params = {
      hadits: haditsType,
      page: "",
      search: dataSearch,
    };

    getHadits(params);
    setHaditsType(haditsType);
  };

  const changeHaditsSuggestion = (suggestion) => {
    const params = {
      hadits: dataHaditsType,
      page: "",
      search: suggestion,
    };

    getHadits(params);
    setSuggestion(suggestion);
  };

  const textConverter = (text, separator) => {
    return text.split(separator).join(" ");
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

  const handleCloseSubmit = () => {
    setShowModalSearch(false);
    setSearch("");
    const params = {
      hadits: dataHaditsType,
      page: "",
      search: "",
    };
    getHadits(params);
  };

  const templateModalSearch = () => {
    return (
      <div className={`${styles.home_action_filter_search}`}>
        <div
          className={`${styles.home_action_filter_item} ${styles.home_action_filter_item_search}`}
        >
          <div className={styles.home_action_filter_wrap_item}>
            <div className={styles.home_text_title_search}>
              Cari hadits berdasarkan periwayat! (
              {textConverter(dataHaditsType, "-")})
            </div>
            <div className={styles.home_action_filter_input}>
              <input
                type="text"
                placeholder="Silahkan cari hadits"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={(e) => handleSubmit(e)}>Cari Hadits</button>
              <button onClick={(e) => handleCloseSubmit(e)}>Batal</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!data) return <p>No hadits data</p>;

  return (
    <>
      {isLoading ? (
        handleLoader()
      ) : (
        <div className={styles.home}>
          <div className={styles.home_greeting}>Assalamualaikum Akhi/Ukhti</div>

          <div className={styles.home_training}>
            <div
              className={`${styles.home_training_item} ${styles.home_training_item_active}`}
            >
              <div className={styles.home_training_item_icon}>
                <FontAwesomeIcon
                  icon="fas-regular fa-book-open-reader"
                  size="lg"
                />
              </div>
              <div className={styles.home_training_item_title}>
                Membaca hadits
              </div>
            </div>
            <div className={`${styles.home_training_item}`}>
              <div className={styles.home_training_item_icon}>
                <FontAwesomeIcon icon="fas-regular fa-circle-play" size="lg" />
              </div>
              <div className={styles.home_training_item_title}>
                Mendengarkan hadits
              </div>
            </div>

            <div className={`${styles.home_training_item} `}>
              <div className={styles.home_training_item_icon}>
                <FontAwesomeIcon
                  icon="fas-solid fa-microphone-lines"
                  size="lg"
                />
              </div>
              <div className={styles.home_training_item_title}>
                Cari hadits dengan suara
              </div>
            </div>

            <div
              className={`${styles.home_training_item}`}
              onClick={(e) => setShowModalSearch(true)}
            >
              <div className={styles.home_training_item_icon}>
                <FontAwesomeIcon icon="fas-solid fa-file-lines" size="lg" />
              </div>
              <div className={styles.home_training_item_title}>
                Cari hadits dengan Text
              </div>
            </div>
          </div>

          <div className={styles.home_text_title}>
            Apa kamu sedang butuh saran hadits ?
          </div>
          <div className={styles.home_suggestion}>
            {listSuggestion.map((suggestion, i) => {
              return (
                <div
                  key={i}
                  className={`${styles.home_suggestion_title} ${
                    suggestion === dataSuggestion
                      ? styles.home_suggestion_title_active
                      : ""
                  }`}
                  onClick={(e) => changeHaditsSuggestion(suggestion)}
                >
                  {suggestion}
                </div>
              );
            })}
          </div>

          <div className={styles.home_wrapper_hadits_action}>
            <div className={styles.home_text_title}>
              hadits berdasarkan periwayat!
            </div>
            <div className={styles.home_action_filter}>
              {listHadits.map((hadits, i) => {
                return (
                  <div
                    key={i}
                    className={`${styles.home_action_filter_item} ${
                      dataHaditsType === hadits.type
                        ? styles.home_action_filter_item_active
                        : ""
                    }`}
                    onClick={(e) => changeHadits(hadits.type)}
                  >
                    {hadits.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.home_hadits_popular}>
            {data.data.map((hadits, i) => (
              <div className={styles.home_hadits_popular_item} key={i}>
                <div className={styles.home_hadits_popular_item_type}>
                  {textConverter(hadits.kitab, "_")}
                </div>
                <div className={styles.home_hadits_popular_item_title}>
                  {hadits.terjemah}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isShowModalSearch == true ? templateModalSearch() : ""}
    </>
  );
}

export default HomePage;
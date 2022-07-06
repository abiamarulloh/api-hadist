import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

function HomePage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [dataSearch, setSearch] = useState("");
  const [dataHadistType, setHadistType] = useState("shahih-bukhari");
  const [dataSuggestion, setSuggestion] = useState();
  const listSuggestion = ["Hadist tentang berqurban", "Hadist tentang zakat", "Hadist tentang Infaq", "Hadist tentang Puasa senin kamis", "Hadist tentang Puasa Arafah" ]

  useEffect(() => {
    setLoading(true);
    handleHadistOnLoad();

    // Initialize
    setSuggestion("Hadist tentang berqurban")
  }, []);

  const handleHadistOnLoad = () => {
    const params = {
      hadist: dataHadistType,
      page: "",
      search: dataSearch,
    };
    getHadist(params);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = {
      hadist: dataHadistType,
      page: "",
      search: dataSearch,
    };
    getHadist(params);
  };

  const getHadist = (params) => {
    fetch(
      `/api/hadist/${params.hadist}?page=${params.page}&search=${params.search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  const changeHadist = (hadistType) => {
    const params = {
      hadist: hadistType,
      page: "",
      search: dataSearch,
    };

    getHadist(params);
    setHadistType(hadistType);
  };

  const changeHadistSuggestion = (suggestion) => {
    const params = {
      hadist: dataHadistType,
      page: "",
      search: suggestion,
    };

    getHadist(params);
    setSuggestion(suggestion)
  }

  const textConverter = (text) => {
    switch (text) {
      case "shahih_muslim":
        return "Shahih Muslim";
        break;
      case "shahih_bukhari":
        return "Shahih Bukhari";
        break;
      case "sunan_tirmidzi":
        return "Sunan Tirmidzi";
        break;

      default:
        break;
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Hadist data</p>;

  return (
    <>
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
              Membaca hadist
            </div>
          </div>
          <div className={`${styles.home_training_item}`}>
            <div className={styles.home_training_item_icon}>
              <FontAwesomeIcon icon="fas-regular fa-circle-play" size="lg" />
            </div>
            <div className={styles.home_training_item_title}>
              Mendengarkan hadist
            </div>
          </div>

          <div className={`${styles.home_training_item} `}>
            <div className={styles.home_training_item_icon}>
              <FontAwesomeIcon icon="fas-solid fa-microphone-lines" size="lg" />
            </div>
            <div className={styles.home_training_item_title}>
              Cari Hadist dengan suara
            </div>
          </div>
          
          <div className={`${styles.home_training_item}`}>
            <div className={styles.home_training_item_icon}>
              <FontAwesomeIcon icon="fas-solid fa-file-lines" size="lg"/>
            </div>
            <div className={styles.home_training_item_title}>
              Cari Hadist dengan Text
            </div>
          </div>
        </div>

        <div className={styles.home_text_title}>
          Apa kamu sedang butuh saran hadist ?
        </div>
        <div className={styles.home_suggestion}>
          {listSuggestion.map((suggestion, i) => {
            return (
              <div key={i}
              className={`${styles.home_suggestion_title} ${suggestion === dataSuggestion ?  styles.home_suggestion_title_active : ''}`}
              onClick={(e) => changeHadistSuggestion(suggestion)}
              >
              {suggestion}
              </div>
            )
          })} 
        </div>

        <div className={styles.home_wrapper_hadist_action}>
          <div className={styles.home_text_title}>Hadist berdasarkan periwayat!</div>
          <div className={styles.home_action_filter}>
            <div className={`${styles.home_action_filter_item} ${dataHadistType === 'shahih-bukhari' ? styles.home_action_filter_item_active : ''}`} onClick={(e) => changeHadist('shahih-bukhari')}>
              Shahih Bukhari
            </div>
            <div className={`${styles.home_action_filter_item} ${dataHadistType === 'shahih-muslim' ? styles.home_action_filter_item_active : ''}`} onClick={(e) => changeHadist('shahih-muslim')}>
              Shahih Muslim
            </div>
            <div className={`${styles.home_action_filter_item} ${dataHadistType === 'sunan-tirmidzi' ? styles.home_action_filter_item_active : ''}`} onClick={(e) => changeHadist('sunan-tirmidzi')}>
              Sunan Tirmidzi
            </div>
          </div>
        </div>
        <div className={styles.home_hadist_popular}>
          {data.data.map((hadist, i) => (
            <div className={styles.home_hadist_popular_item} key={i}>
              <div className={styles.home_hadist_popular_item_type}>
                {textConverter(hadist.kitab)}
              </div>
              <div className={styles.home_hadist_popular_item_title}>
                {hadist.terjemah}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;

import React, { forwardRef } from 'react';
import './News.css';
// import newsData, { getSortedNews } from '../../data/newsData';
// import NewsModal from './NewsModal';

const News = forwardRef((props, ref) => {
  // ===== 一時的にコメントアウト（後で元に戻す） =====
  // const [selectedNews, setSelectedNews] = useState(null);
  // const [showModal, setShowModal] = useState(false);

  // // 日付をフォーマット
  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString('ja-JP', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric'
  //   });
  // };

  // // ニュースをクリックした時の処理
  // const handleNewsClick = (news) => {
  //   setSelectedNews(news);
  //   setShowModal(true);
  // };

  // // モーダルを閉じる処理
  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   setSelectedNews(null);
  // };

  // const sortedNews = getSortedNews();

  return (
    <section ref={ref} id="news" className="section news-section">
      <div className="container">
        <h2>News</h2>
        
        {/* 一時的にComing Soon表示 */}
        <div className="section-content">
          <div className="coming-soon">
            <p>Coming Soon</p>
          </div>
        </div>

        {/* ===== 元のニュース機能（後で復活させる） =====
        <div className="section-content">
          {sortedNews.length > 0 ? (
            <div className="news-list">
              {sortedNews.map(news => (
                <div 
                  key={news.id} 
                  className="news-item"
                  onClick={() => handleNewsClick(news)}
                >
                  <div className="news-date">{formatDate(news.date)}</div>
                  <div className="news-title">{news.title}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-news">ニュースはありません。</p>
          )}
        </div>
        */}
      </div>

      {/* ===== ニュースモーダル（後で復活させる） =====
      {showModal && (
        <NewsModal 
          news={selectedNews} 
          onClose={handleCloseModal}
        />
      )}
      */}
    </section>
  );
});

export default News;
// src/pages/CompanyPage.jsx
import React, { useRef, useState } from 'react';
import './CompanyPage.css';

// コンポーネントのインポート
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import Vision from '../components/Vision/Vision';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import CompanyInfo from '../components/CompanyInfo/CompanyInfo';
import Officers from '../components/Officers/Officers';
import History from '../components/History/History';
import Services from '../components/Services/Services';
import Member from '../components/Member/Member';
import News from '../components/News/News';
import Recruit from '../components/Recruit/Recruit'; // インポートは残しておく
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const CompanyPage = () => {
  // Member セクションのアクティブなサブセクション
  const [activeMemberSection, setActiveMemberSection] = useState('staff');

  // セクションへの参照
  const headerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const aboutCompanyRef = useRef(null);
  const companyInfoRef = useRef(null);
  const officersRef = useRef(null);
  const historyRef = useRef(null);
  const servicesRef = useRef(null);
  const memberRef = useRef(null);
  const staffRef = useRef(null);
  const characterRef = useRef(null);
  const newsRef = useRef(null);
  const recruitRef = useRef(null); // refは念のため残しておく
  const contactRef = useRef(null);

  /**
   * Member セクション内のサブセクションにスクロールする関数
   * @param {string} subSection - スクロール先のサブセクション名 (staff または character)
   */
  const scrollToMemberSubSection = (subSection) => {
    setActiveMemberSection(subSection);
    
    // Member セクション全体にスクロール
    if (memberRef && memberRef.current) {
      const header = headerRef.current;
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = memberRef.current.getBoundingClientRect().top;
      const offset = targetPosition + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  /**
   * 指定されたセクションへスクロールする関数
   * @param {string} section - スクロール先のセクション名
   */
  const scrollToSection = (section) => {
    // セクション名と対応するrefのマッピング
    const refs = {
      mission: missionRef,
      vision: visionRef,
      'about-company': aboutCompanyRef,
      'company-info': companyInfoRef,
      officers: officersRef,
      history: historyRef,
      services: servicesRef,
      member: memberRef,
      'member-staff': () => {
        setActiveMemberSection('staff');
        return memberRef;
      },
      'member-character': () => {
        setActiveMemberSection('character');
        return memberRef;
      },
      news: newsRef,
      // recruitのマッピングは削除しましたが、後から復活できるようにコメントアウトしておくこともできます
      // recruit: recruitRef,
      contact: contactRef
    };
    
    // 指定されたセクションに対応するrefを取得
    let ref = refs[section];
    
    // 関数の場合は実行結果を取得
    if (typeof ref === 'function') {
      ref = ref();
    }
    
    // refが存在し、DOM要素を参照している場合のみ処理を実行
    if (ref && ref.current) {
      // ヘッダー要素を取得
      const header = headerRef.current;
      
      // ヘッダーの高さを取得
      const headerHeight = header ? header.offsetHeight : 0;
      
      // ターゲット要素までの垂直距離を取得
      const targetPosition = ref.current.getBoundingClientRect().top;
      
      // スクロールすべき距離を計算
      const offset = targetPosition + window.pageYOffset - headerHeight - 20;
      
      // スムーズにスクロール
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="company-page">
      <Header ref={headerRef} scrollToSection={scrollToSection} />
      <Hero />
      <CompanyInfo ref={companyInfoRef} />
      <Mission ref={missionRef} />
      <Vision ref={visionRef} />
      <AboutCompany ref={aboutCompanyRef} />
      {/*<Officers ref={officersRef} />*/}
      <History ref={historyRef} />
      <Services ref={servicesRef} />
      <Member 
        ref={memberRef} 
        staffRef={staffRef}
        characterRef={characterRef}
        activeSubSection={activeMemberSection}
        scrollToSubSection={scrollToMemberSubSection}
      />
      <News ref={newsRef} />
      {/* Recruitコンポーネントを削除 */}
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default CompanyPage;
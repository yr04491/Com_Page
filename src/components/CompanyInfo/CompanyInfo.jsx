import React, { forwardRef } from 'react';
import './CompanyInfo.css';

const CompanyInfo = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="company-info" className="section company-info-section">
      <div className="container">
        <h2>会社概要</h2>
        <div className="section-content">
          <table className="company-info-table">
            <tbody>
              <tr><th>会社名</th><td>株式会社ミナカノ</td></tr>
              <tr><th>設立</th><td>2025年5月8日</td></tr>
              <tr><th>所在地</th><td>福井県鯖江市旭町1丁目8-4</td></tr>
              <tr><th>代表者</th><td>田濃 一翔</td></tr>
              <tr><th>資本金</th><td>100万円</td></tr>
              <tr><th>事業内容</th><td>
                1. 教育ITサービスの開発、提供及び運営<br />
                2. 教育関連アプリの企画、開発、販売及びサポート業務<br />
                3. 教育コンテンツの制作及び配信
                </td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
});

export default CompanyInfo;
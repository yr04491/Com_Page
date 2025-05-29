import React, { forwardRef, useState } from 'react';
import './Contact.css';

const Contact = forwardRef((props, ref) => {
  // フォームの状態を管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // 送信状態を管理
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // 会社のメールアドレス（ここを実際のメールアドレスに変更してください）
  const COMPANY_EMAIL = 'info@minakano.co.jp';

  // フォーム入力の変更ハンドラ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // フォーム送信ハンドラ（mailto:リンクを使用）
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // メール件名を生成
      const subject = `【株式会社ミナカノ】お問い合わせ - ${formData.name}様より`;
      
      // メール本文を生成
      const body = `
件名: お問い合わせ

■ お名前
${formData.name}

■ メールアドレス
${formData.email}

■ お問い合わせ内容
${formData.message}

---
このメールは株式会社ミナカノのWebサイトから送信されました。
      `.trim();

      // mailto:リンクを生成（URLエンコードが必要）
      const mailtoLink = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // メールクライアントを開く
      window.location.href = mailtoLink;
      
      // 成功状態にセット
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 1000);
      
    } catch (err) {
      setError('メールクライアントの起動に失敗しました。お手数ですが、直接 ' + COMPANY_EMAIL + ' までご連絡ください。');
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="section contact-section">
      <div className="container">
        <h2>Contact</h2>
        <div className="section-content">
          <div className="contact-intro">
            <p className="contact-description">
              子供たち一人ひとりの成長を支えるために、私たちは「学び」と「自己肯定感」を育む新しい教育の形を届けています。
              ご質問・ご相談がありましたら、お気軽にお問い合わせください
            </p>
          </div>

          {isSubmitted ? (
            <div className="form-success">
              <p>メールクライアントを起動しました。<br />メール送信画面で「送信」ボタンを押してお問い合わせを完了してください。</p>
              <p style={{fontSize: '0.9rem', color: '#666', marginTop: '15px'}}>
                メールクライアントが起動しない場合は、直接 <strong>{COMPANY_EMAIL}</strong> までご連絡ください。
              </p>
              <button 
                className="form-reset-button" 
                onClick={() => setIsSubmitted(false)}
              >
                新しいお問い合わせ
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">お名前</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="お名前を入力してください"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="メールアドレスを入力してください"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="お問い合わせ内容を入力してください"
                  rows="6"
                  required
                ></textarea>
              </div>
              
              {error && <div className="form-error">{error}</div>}
              
              <div className="form-submit">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'メールクライアント起動中...' : 'メールで送信'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
});

export default Contact;
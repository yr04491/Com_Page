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

  // フォーム入力の変更ハンドラ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // フォーム送信ハンドラ（仮の実装）
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // ここでは仮の処理として、送信成功をシミュレート
    // 実際の送信処理は後から追加できます
    setTimeout(() => {
      console.log('フォームデータ:', formData);
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
    
    // 実際のフォーム送信処理はここに追加します
    // 例: fetch APIやaxiosを使ったAPIリクエストなど
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
              <p>お問い合わせいただきありがとうございます。<br />内容を確認次第、ご連絡いたします。</p>
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
                  {isSubmitting ? '送信中...' : '送信'}
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
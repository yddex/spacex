import { Mars } from "../Mars";

export function Content() {
  return (
    <div className="center">
      <section className="content">
        <Mars />
        <section className="content__heading">
          <h1 className="heading__big">ПУТЕШЕСТВИЕ</h1>
          <h2 className="heading__small">на красную планету</h2>
        </section>

        <section className="content__info">
          <div className="info__block">
            <section className="info info-left-u">
              <p className="info__small">мы</p>
              <p className="info__big">1</p>
              <p className="info__small">на рынке</p>
            </section>
            <section className="info info-rigth-u">
              <p className="info__small">гарантируем</p>
              <p className="info__big">50%</p>
              <p className="info__small">безопасность</p>
            </section>
          </div>

          <div className="info__block">
            <section className="info info-left-b">
              <p className="info__small">календарик за</p>
              <p className="info__big">2001</p>
              <p className="info__small">в подарок</p>
            </section>
            <section className="info info-rigth-b">
              <p className="info__small">путешествие</p>
              <p className="info__big">597</p>
              <p className="info__small">дней</p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

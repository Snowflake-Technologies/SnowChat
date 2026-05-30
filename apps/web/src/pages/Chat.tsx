import Layout
from "../components/Layout";

export default function Chat() {

  return (

    <Layout>

      <div
        className="chat-page"
      >

        <header>

          <h2>
            # general
          </h2>

        </header>

        <section>

          <div>
            Welcome to SnowChat
          </div>

        </section>

        <footer>

          <input
            placeholder="Message..."
          />

        </footer>

      </div>

    </Layout>

  );

}

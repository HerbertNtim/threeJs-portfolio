import { clientReviews } from "../constant";

const Clients = () => {
  return (
    <section className="c-space my-20 bg-white-600 dark:bg-black-200 pb-10 p-6 dark:bg-transparent">
      <h3 className="head-text">Reviews</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-600 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <a href="" className="dark:text-white-700">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

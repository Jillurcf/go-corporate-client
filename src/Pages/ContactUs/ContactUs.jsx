const ContactUs = () => {
  return (
    <div className="max-w-screen-2xl">
      <h2 className="text-6xl py-8 text-center font-bold">Contact us</h2>

      <form className="card-body w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
          <label className="label">
           
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Say Something</span>
          </label>
          <textarea rows={10} type="text" placeholder="Write about your requirement" className="textarea input-bordered" required />
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </form>



    </div>
  );
};

export default ContactUs;

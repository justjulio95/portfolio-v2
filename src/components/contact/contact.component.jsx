const ContactForm = () => {
  return (
    <div id="contact" className="container mt-3">
      <h1 className="text-white">Contact Me</h1>
      <div className="container d-flex justify-content-center">
        <form
          className="col-sm-6 bg-secondary border border-2 rounded-2 shadow-lg"
          name="contact1"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
          //prime for spam prevention
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact1" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <div className="container d-md-flex mt-4">
            <label htmlFor="name" className="form-label text-white mt-1 mx-4 fs-4">Name: </label>
            <br />
            <input
              id="name"
              typeof="text"
              name="name"
              className="form-control"
              placeholder="What's your name?" />
          </div>
          <br />
          <div className="container d-md-flex mt-3">
            <label htmlFor="email" className="form-label text-white mt-1 mx-4 fs-4">Email: </label>
            <br />
            <input
              id="email"
              typeof="email"
              name="email"
              className="form-control"
              placeholder="What's your email?" />
          </div>
          <br />
          <div className="container d-md-flex mt-3">
            <label htmlFor="message" className="form-label text-white mt-1 mx-4 fs-4">Message: </label>
            <br />
            <textarea className="form-control"></textarea>
          </div>
          <br />

          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
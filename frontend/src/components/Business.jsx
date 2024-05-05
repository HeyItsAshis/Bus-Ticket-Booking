import NavigationBar from "./NavigationBar";

const Business = () => {
  return (
    <>
     <div className="body bg-img">
      <NavigationBar />
      <main className="Business">
        <div className="container">
          <div className="row">
            <div className="col-4 mx-auto">
              <form>
                <div className="text-center">
                  <h1 className="h3 mb-3 fw-normal">Register Your Bus</h1>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="BusName"
                  />
                  <label for="floatingName">Bus Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingIdCard"
                    placeholder="Registration No."
                  />
                  <label for="floatingIdCard">Registaration No.</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                  />
                  <label for="floatingEmail">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="floatingMobile"
                    placeholder="+91"
                    pattern="[0-9]{10}"
                    required
                  />
                  <label for="floatingMobile">Mobile No.</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingCity"
                    placeholder="From"
                  />
                  <label for="floatingCity">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingCity"
                    placeholder="To"
                  />
                  <label for="floatingCity">To</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Create Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Register
                </button>
                <p> We will conatct you very soon. Thankyou for showing intrest with us.</p> 
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Business;
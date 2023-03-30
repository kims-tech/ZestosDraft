const Loader = ({ loading }) => {
    return (
      <>
        {loading && (
          <div className='preloader'>
            <div id = "cupcake" class = "box">
                
                <span class = "letter box">Z</span>
                <span class = "letter box">e</span>
                <span class = "letter box">s</span>
                <span class = "letter box">t</span>

                <div class = "cupcakeCircle box">
                    <div class = "cupcakeInner box">
                      <div class = "cupcakeCore box"></div>
                    </div>
                </div>
                {/* <span class = "letter box">o</span> */}
                <span class = "letter box">s</span>
              </div>
            </div>
        )}
      </>
    );
  };
  
  export default Loader;
  
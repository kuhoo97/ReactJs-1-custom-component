import './MyComponent.css'

function MyComponent() {
    return (
        <div className="expense-item">
          <div>March 28th 2021</div>
          <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$294.67</div>
          </div>
        </div>
      );
  }
  
  export default MyComponent;

  //using custom css file to create a table- MyComponent.css
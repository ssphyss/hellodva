import React from 'react';

const Example = (props) => {

    return (
        <div>Example 成功</div>
  )
}

Example.propTypes = {

}
// 串models時用
const mapStateToProps = (state) => {
  return {
    example: state.example
  };
};

export default Example;

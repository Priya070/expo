import React, { PureComponent } from 'react'

export default class Batch extends PureComponent {
  render() {
    return (
      <div>
            <div className='container my-4'>
                
                <div class="form-floating mb-3">
                    <select class="form-select border border-primary" aria-label="Default select example">
                        {/* <span class="border border-info-subtle"></span> */}
                        <option selected>Select Batch</option>
                        <option value="1">CS</option>
                        <option value="2">CSAI</option>
                        <option value="3">IT</option>
                        <option value="4">CSB</option>
                    </select>
                </div>
            </div>
            <div className='text-center'>
            <button type="button" class="btn btn-success">Submit</button>
            </div>
        </div>
    )
  }
}

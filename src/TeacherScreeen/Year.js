import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class year extends Component { 
  render() {
    return (
        <div className='container my-4'>
            <div class="form-floating mb-3">
                <select class="form-select border border-primary"  aria-label="Default select example">
                <option selected>Select Year</option>
                <option value="1">1st year</option>
                <option value="2">2nd year</option>
                <option value="3">3rd year</option>
                <option value="4">4th year</option>
            </select>
        </div>
        </div>
    )
  }
}

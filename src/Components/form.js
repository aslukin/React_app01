import React from 'react';

export const Form = () => {
    return(
        <form>
            <div className="form-group">
              <input type="text" name="" id="" className="form-control" placeholder="enter the task" aria-describedby="helpId" />
              <small id="helpId" class="text-muted">Help text</small>
            </div>
        </form>
    );
}
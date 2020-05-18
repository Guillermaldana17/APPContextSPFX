import * as React from 'react';
import { IHomeProps } from './IHomeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPProvider from './Context/SP/SPProvider'
import Menu from './Menu'

const Home = (props: IHomeProps) => {
  return (
    <SPProvider>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-9'>

          </div>
          <div className='col-sm-3'>
            <Menu></Menu>
          </div>
        </div>
      </div>
    </SPProvider>

  );
}

export default Home;

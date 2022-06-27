//import '../src/bootstrap/css/bootstrap.min.css';
import 'piral/polyfills';
import { createInstance, renderInstance } from 'piral';
import { layout, errors } from './layout';
import { setupFooter } from '../src/components/footer';
import {  setupMenu } from '../src/components/menu';
import { createBlazorApi } from 'piral-blazor';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/feedforpilets';

const instance = createInstance({
  // important part
  plugins: [createBlazorApi()],
  // ...
});

renderInstance({
  settings:{ 
  menu: {
    items: [...setupMenu(), ...setupFooter(),],    
  },  
  },
  layout, 
  errors,
  plugins: [createBlazorApi()], 
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
 
});

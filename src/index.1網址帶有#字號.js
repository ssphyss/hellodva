import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router 引入位置
// app.router(require('./router').default);
app.router(require('./../config/router.config').default);

// 5. Start
app.start('#root');

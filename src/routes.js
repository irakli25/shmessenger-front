import "./shmessenger-app";

export default [
    {
        path: '/',
        component: 'shmessenger-app',
        children: [
                    {
                        path: '/',
                        component: 'shmessenger-main',
                        action: () => {
                            import('./views/main/shmessenger-main');
                        }
                    },
                    {
                        path: '/login',
                        component: 'shmessenger-login',
                        action: () => {
                            import('./views/login/shmessenger-login');
                        }
                    },
                    {
                        path: '/register',
                        component: 'shmessenger-register',
                        action: () => {
                            import('./views/register/shmessenger-register');
                        }
                    },
                    {
                        path: '(.*)', 
                        component: 'shmessenger-404',
                        action: () => {
                            import('./views/404/shmessenger-404');
                        }
                    },
                ]
    },
    
  ]

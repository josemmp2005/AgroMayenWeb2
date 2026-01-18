import netlifyIdentity from 'netlify-identity-widget';

export const initAuth = () => {
    console.log('Initializing Netlify Identity...');
    try {
        netlifyIdentity.init();
        console.log('Netlify Identity Initialized');
    } catch (error) {
        console.error('Error initializing Netlify Identity:', error);
    }
};

export const login = () => {
    console.log('Attempting to open login widget...');
    try {
        netlifyIdentity.open();
        console.log('Login widget opened command sent');
    } catch (error) {
        console.error('Error opening login widget:', error);
    }
};

export const logout = () => {
    console.log('Logging out...');
    netlifyIdentity.logout();
};

export const currentUser = () => {
    return netlifyIdentity.currentUser();
}

export const onLogin = (callback: (user: netlifyIdentity.User) => void) => {
    netlifyIdentity.on('login', (user) => {
        console.log('User logged in:', user);
        callback(user);
    });
    // Check if already logged in on load
    const user = netlifyIdentity.currentUser();
    if (user) {
        console.log('User already logged in:', user);
        callback(user);
    }
}

export const onLogout = (callback: () => void) => {
    netlifyIdentity.on('logout', () => {
        console.log('User logged out');
        callback();
    });
}

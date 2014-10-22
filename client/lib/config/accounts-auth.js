Accounts.ui.config({
    extraSignupFields: [{
        fieldName: 'name',
        fieldLabel: 'Nome'
    }],
    requestPermission: {
        facebook: ['email', 'user_about_me']
    }
});

const {
    AndroidConfig,
    createRunOncePlugin,
    withAndroidManifest,
} = require('@expo/config-plugins');

const withAndroidRemovedPermissions = (config, permissions) => {
    return withAndroidManifest(config, config => {
        AndroidConfig.Permissions.removePermissions(
            config.modResults,
            permissions,
        );

        const usesPermissions =
            config.modResults.manifest['uses-permission'] || [];

        permissions.forEach(permission => {
            usesPermissions.push({
                $: {
                    'tools:node': 'remove',
                    'android:name': permission,
                },
            });
        });

        config.modResults.manifest['uses-permission'] = usesPermissions;
        config.modResults.manifest.$['xmlns:tools'] =
            'http://schemas.android.com/tools';

        return config;
    });
};

module.exports = createRunOncePlugin(
    withAndroidRemovedPermissions,
    'withAndroidRemovedPermissions',
);

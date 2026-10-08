type SettingState = "enabled" | "disabled";

const settings: Record<string, SettingState> = {
    wifi: "enabled",
    bluetooth: "disabled",
    notifications: "enabled",
    location: "disabled",
    darkMode: "enabled",
};

function printEnabled(config: Record<string, SettingState>): void {
    console.log("Увімкнені налаштування:");

    let count = 0;

    for (const key in config) {
        if (config[key] === "enabled") {
            console.log(`- ${key}`);
            count++;
        }
    }

    if (count === 0) {
        console.log("(жодного немає)");
    }
}

printEnabled(settings);

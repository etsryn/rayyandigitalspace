import { supabase } from "../lib/supabase";
import { v4 as uuidv4 } from "uuid";
import { UAParser } from "ua-parser-js";

const parser = new UAParser();

export async function trackVisitor() {

    const result = parser.getResult();

    // Visitor UUID (persistent)
    let visitorUUID = localStorage.getItem("visitor_uuid");

    if (!visitorUUID) {
        visitorUUID = uuidv4();
        localStorage.setItem("visitor_uuid", visitorUUID);
    }

    // Session UUID (new every tab)
    let sessionUUID = sessionStorage.getItem("session_uuid");

    if (!sessionUUID) {
        sessionUUID = uuidv4();
        sessionStorage.setItem("session_uuid", sessionUUID);
    }

    const data = {

        visitor_uuid: visitorUUID,
        session_uuid: sessionUUID,

        browser: result.browser.name,
        browser_version: result.browser.version,

        engine: result.engine.name,
        engine_version: result.engine.version,

        os: result.os.name,
        os_version: result.os.version,

        device_type: result.device.type || "Desktop",
        platform: navigator.platform,

        language: navigator.language,
        languages: navigator.languages,

        user_agent: navigator.userAgent,

        referrer: document.referrer,

        landing_page: window.location.pathname,
        current_page: window.location.pathname,

        screen_width: screen.width,
        screen_height: screen.height,

        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,

        pixel_ratio: window.devicePixelRatio,

        color_depth: screen.colorDepth,

        cpu_cores: navigator.hardwareConcurrency,

        device_memory: navigator.deviceMemory ?? null,

        network_type:
            navigator.connection?.type ??
            null,

        effective_network_type:
            navigator.connection?.effectiveType ??
            null,

        downlink:
            navigator.connection?.downlink ??
            null,

        rtt:
            navigator.connection?.rtt ??
            null,

        save_data:
            navigator.connection?.saveData ??
            false,

        dark_mode:
            window.matchMedia("(prefers-color-scheme: dark)").matches,

        touch_support:
            navigator.maxTouchPoints > 0,

        cookies_enabled:
            navigator.cookieEnabled,

        javascript_enabled: true,

        timezone:
            Intl.DateTimeFormat().resolvedOptions().timeZone,

        utc_offset:
            String(new Date().getTimezoneOffset()),

        entry_time:
            new Date().toISOString(),

        first_visit:
            new Date().toISOString(),

        last_visit:
            new Date().toISOString(),

        created_at:
            new Date().toISOString(),

        updated_at:
            new Date().toISOString(),

        portfolio_version: "v1.0",

        accepted_tracking: true
    };

    const { data: existing } = await supabase
        .from("visitors")
        .select("id")
        .eq("session_uuid", sessionUUID)
        .maybeSingle();

    if (existing) {

        await supabase
            .from("visitors")
            .update({
                current_page: window.location.pathname,
                last_visit: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq("id", existing.id);

    } else {

        const { error } = await supabase
            .from("visitors")
            .insert(data);

        if (error) {
            console.error(error);
        }

    }

}
export async function trackInteraction(column) {

    const sessionUUID = sessionStorage.getItem("session_uuid");

    const { data, error } = await supabase
        .from("visitors")
        .update({
            [column]: true,
            updated_at: new Date().toISOString()
        })
        .eq("session_uuid", sessionUUID)
        .select("*");

    // console.log("Data:", data);
    // console.log("Error:", error);
}
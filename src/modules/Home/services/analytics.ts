import { AnalyticsEvents } from "@/constants/analyticsEvents";
import { mixpanelAnalytics } from "@/utils/Analytics";
import { logger } from "@/utils/Logger";

export const trackVisitor = () => {
  try {
    mixpanelAnalytics.trackEvent(AnalyticsEvents.visitors);
  } catch (err: any) {
    logger.error(err);
  }
};

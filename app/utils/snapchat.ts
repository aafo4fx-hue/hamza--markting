/**
 * Snapchat Pixel Event Tracking Utilities
 * Pixel ID: 465adee3-d870-4b0a-9681-23c9f5882c0a
 */

declare global {
  interface Window {
    snaptr?: (action: string, event: string, params?: Record<string, any>) => void;
  }
}

/**
 * Track when user views the product details
 */
export const trackViewContent = (params?: {
  price?: number;
  currency?: string;
  item_ids?: string[];
  item_category?: string;
}) => {
  if (typeof window !== 'undefined' && window.snaptr) {
    window.snaptr('track', 'VIEW_CONTENT', {
      price: params?.price,
      currency: params?.currency || 'SAR',
      item_ids: params?.item_ids || ['iphone-18-pro-max'],
      item_category: params?.item_category || 'smartphones',
    });
  }
};

/**
 * Track when user adds product to cart
 */
export const trackAddCart = (params?: {
  price?: number;
  currency?: string;
  item_ids?: string[];
  item_category?: string;
  number_items?: number;
}) => {
  if (typeof window !== 'undefined' && window.snaptr) {
    window.snaptr('track', 'ADD_CART', {
      price: params?.price,
      currency: params?.currency || 'SAR',
      item_ids: params?.item_ids || ['iphone-18-pro-max'],
      item_category: params?.item_category || 'smartphones',
      number_items: params?.number_items || 1,
    });
  }
};

/**
 * Track when user starts the checkout process (opens pre-order modal)
 */
export const trackStartCheckout = (params?: {
  price?: number;
  currency?: string;
  item_ids?: string[];
  item_category?: string;
  number_items?: number;
  payment_info_available?: number;
}) => {
  if (typeof window !== 'undefined' && window.snaptr) {
    window.snaptr('track', 'START_CHECKOUT', {
      price: params?.price,
      currency: params?.currency || 'SAR',
      item_ids: params?.item_ids || ['iphone-18-pro-max'],
      item_category: params?.item_category || 'smartphones',
      number_items: params?.number_items || 1,
      payment_info_available: params?.payment_info_available || 0,
    });
  }
};

/**
 * Track completed purchase/pre-order
 */
export const trackPurchase = (params: {
  price: number;
  currency?: string;
  transaction_id: string;
  item_ids?: string[];
  item_category?: string;
  number_items?: number;
  user_email?: string;
  user_phone_number?: string;
}) => {
  if (typeof window !== 'undefined' && window.snaptr) {
    window.snaptr('track', 'PURCHASE', {
      price: params.price,
      currency: params.currency || 'SAR',
      transaction_id: params.transaction_id,
      item_ids: params.item_ids || ['iphone-18-pro-max'],
      item_category: params.item_category || 'smartphones',
      number_items: params.number_items || 1,
      user_email: params.user_email || '',
      user_phone_number: params.user_phone_number || '',
    });
  }
};

/**
 * Track sign-ups (for lead generation)
 */
export const trackSignUp = (params?: {
  sign_up_method?: string;
  user_email?: string;
  user_phone_number?: string;
}) => {
  if (typeof window !== 'undefined' && window.snaptr) {
    window.snaptr('track', 'SIGN_UP', {
      sign_up_method: params?.sign_up_method || 'pre-order-form',
      user_email: params?.user_email || '',
      user_phone_number: params?.user_phone_number || '',
    });
  }
};

/**
 * Track custom event for installment plan view
 */
export const trackInstallmentView = () => {
  if (typeof window !== 'undefined' && window.snaptr) {
    window.snaptr('track', 'CUSTOM_EVENT_1', {});
  }
};

/**
 * Track when user clicks WhatsApp button
 */
export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && window.snaptr) {
    window.snaptr('track', 'CUSTOM_EVENT_2', {});
  }
};

/**
 * Track when user selects a specific color variant
 */
export const trackColorSelection = () => {
  if (typeof window !== 'undefined' && window.snaptr) {
    window.snaptr('track', 'CUSTOM_EVENT_3', {});
  }
};

# Snapchat Pixel Installation Documentation

## Overview
This document describes the Snapchat Pixel implementation for the iPhone 18 Pro Max marketing website.

**Pixel ID:** `465adee3-d870-4b0a-9681-23c9f5882c0a`

## Installation Summary

### 1. Base Code Installation ✅
The Snapchat Pixel base code has been installed in `app/layout.tsx` using Next.js's Script component with `strategy="afterInteractive"` for optimal performance.

**Location:** `app/layout.tsx`
- The base code loads the Snapchat pixel library
- Initializes the pixel with your unique ID
- Automatically tracks PAGE_VIEW on every page load

### 2. Event Tracking Utilities ✅
A comprehensive utility file has been created with reusable tracking functions.

**Location:** `app/utils/snapchat.ts`

Available tracking functions:
- `trackViewContent()` - Track product page views
- `trackAddCart()` - Track add to cart events
- `trackStartCheckout()` - Track checkout initiation
- `trackPurchase()` - Track completed purchases/pre-orders
- `trackSignUp()` - Track lead generation
- `trackInstallmentView()` - Track installment popup views (Custom Event 1)
- `trackWhatsAppClick()` - Track WhatsApp button clicks (Custom Event 2)
- `trackColorSelection()` - Track color variant selection (Custom Event 3)

### 3. Implemented Tracking Events

#### Automatic Events:
1. **PAGE_VIEW** - Fires on every page load (automatic via base code)
2. **VIEW_CONTENT** - Fires when landing page loads
   - Location: `app/page.tsx` (useEffect on mount)
   - Includes: price, currency, item_ids, category

#### User Interaction Events:

3. **START_CHECKOUT** - Fires when pre-order modal opens
   - Location: `app/components/PreorderModal.tsx`
   - Trigger: Modal opens
   - Includes: price, currency, item details

4. **PURCHASE** - Fires when pre-order form is submitted
   - Location: `app/components/PreorderModal.tsx`
   - Trigger: Form submission with WhatsApp redirect
   - Includes: price, transaction_id, phone number, item details

5. **SIGN_UP** - Fires on pre-order submission (lead generation)
   - Location: `app/components/PreorderModal.tsx`
   - Trigger: Concurrent with PURCHASE event
   - Includes: phone number, sign-up method

6. **CUSTOM_EVENT_1** (Installment View) - Fires when installment popup is viewed
   - Location: `app/components/InstallmentPopup.tsx`
   - Trigger: Popup opens

7. **CUSTOM_EVENT_2** (WhatsApp Click) - Fires on any WhatsApp button click
   - Locations:
     - `app/components/FloatingWhatsapp.tsx`
     - `app/page.tsx` (all order buttons)
   - Trigger: Any WhatsApp CTA click

## Event Flow Example

### Typical User Journey:
1. User lands on page → **PAGE_VIEW** + **VIEW_CONTENT**
2. User clicks "Order Now" button → **CUSTOM_EVENT_2** (WhatsApp Click)
3. User clicks floating WhatsApp → **CUSTOM_EVENT_2** (WhatsApp Click)
4. User views installment popup → **CUSTOM_EVENT_1** (Installment View)
5. User opens pre-order modal → **START_CHECKOUT**
6. User completes form → **PURCHASE** + **SIGN_UP**

## Currency & Price Details
- All prices are in **SAR (Saudi Riyal)**
- Prices include VAT (15%)
- Price tracking is dynamic based on selected storage capacity

## Testing the Implementation

### Browser Console Testing:
Open your browser's Developer Console and check:

```javascript
// Check if Snapchat pixel is loaded
console.log(window.snaptr);

// Should return a function if loaded correctly
```

### Verify Events in Snapchat Events Manager:
1. Go to Snapchat Ads Manager
2. Navigate to Events Manager
3. Select your pixel (465adee3-d870-4b0a-9681-23c9f5882c0a)
4. Check "Test Events" tab to see real-time events

### Manual Event Testing:
You can manually trigger events in the console:

```javascript
// Test VIEW_CONTENT
window.snaptr('track', 'VIEW_CONTENT', {
  price: 5999,
  currency: 'SAR',
  item_ids: ['iphone-18-pro-max'],
  item_category: 'smartphones'
});

// Test PURCHASE
window.snaptr('track', 'PURCHASE', {
  price: 5999,
  currency: 'SAR',
  transaction_id: 'test-123',
  item_ids: ['iphone-18-pro-max']
});
```

## Privacy & User Data

### Current Implementation:
- Phone numbers are tracked (when users submit forms)
- No email addresses are collected or tracked
- No user_email fields are populated (left as empty strings)

### PII Handling:
The implementation follows privacy best practices:
- User data is only sent when explicitly provided (form submission)
- No automatic collection of personal information
- Phone numbers are only sent during PURCHASE/SIGN_UP events

## Custom Events Mapping

| Custom Event | Purpose | Trigger |
|--------------|---------|---------|
| CUSTOM_EVENT_1 | Installment Plan Interest | User views installment popup |
| CUSTOM_EVENT_2 | WhatsApp Engagement | User clicks any WhatsApp CTA |
| CUSTOM_EVENT_3 | Color Selection | User selects product color (not implemented yet) |
| CUSTOM_EVENT_4 | Available | Not used |
| CUSTOM_EVENT_5 | Available | Not used |

## Future Enhancements

### Potential Additions:
1. **Color Selection Tracking** - Track when users change color variants
2. **Storage Selection Tracking** - Track storage capacity changes
3. **Scroll Depth Tracking** - Track how far users scroll
4. **Time on Page** - Track engagement duration
5. **ADD_CART** - If you add shopping cart functionality
6. **Email Capture** - If you collect emails in the future

### Advanced Tracking:
Consider implementing:
- Enhanced e-commerce tracking with full product details
- Funnel conversion tracking
- A/B test variant tracking
- Campaign UTM parameter tracking

## Troubleshooting

### Pixel Not Loading:
1. Check browser console for errors
2. Verify Script component is in `<head>` section
3. Check network tab for `scevent.min.js` request

### Events Not Firing:
1. Verify `window.snaptr` exists
2. Check if tracking functions are imported correctly
3. Ensure events are called on client-side only (not during SSR)
4. Check Snapchat Events Manager for test events

### Common Issues:
- **TypeScript Errors**: The `window.snaptr` type is declared in `app/utils/snapchat.ts`
- **SSR Issues**: All tracking is wrapped in `typeof window !== 'undefined'` checks
- **Event Timing**: Some events use `useEffect` to ensure DOM is ready

## Support

For issues related to:
- **Pixel Configuration**: Contact Haki Media or Snapchat Support
- **Code Implementation**: Review this documentation and check component files
- **Event Testing**: Use Snapchat Events Manager Test Events feature

## File Locations Reference

```
my-app/
├── app/
│   ├── layout.tsx              # Pixel base code
│   ├── page.tsx                # Main page tracking
│   ├── components/
│   │   ├── PreorderModal.tsx   # Checkout & purchase tracking
│   │   ├── InstallmentPopup.tsx # Installment view tracking
│   │   └── FloatingWhatsapp.tsx # WhatsApp tracking
│   └── utils/
│       └── snapchat.ts         # All tracking utilities
└── SNAPCHAT_PIXEL.md          # This documentation
```

## Version History
- **v1.0** (2026-10-22): Initial implementation with base pixel and core events

---

**Last Updated:** October 22, 2026  
**Maintained by:** Development Team  
**Pixel Owner:** Haki Media

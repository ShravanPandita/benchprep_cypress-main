const certificateIcon = 'div.certificate-item i[data-bp-icon="="]'
const milestoneIcon = 'div.milestones-item i.icon-map-pin'
const notificationIcon = 'div.messages-item i.icon-envelope' 
const notificationIconUnread = 'div.messages-item.unread i.icon-envelope' 
const syncStatusIcon = 'div.sync-menu a.sync-status'
const certificateWid = 'div.certificate-modal'
const milestoneWid = 'div#milestones-modal'
const msgWid = 'div#messages-modal'
const syncStatusWid = 'div#sync-modal'

class ToolBarItems {

    iconCertificate () {
        return cy.get(certificateIcon)
      }

    iconMilestone (){
        return cy.get(milestoneIcon)
    }

    iconNotificaiton (){
        return cy.get(notificationIcon)
    }

    iconNotificaitonWithUnread (){
        return cy.get(notificationIconUnread)
    }

    iconSyncStatus (){
        return cy.get(syncStatusIcon)
    }

    clickNavItem (item) {
        return cy.get(this.navItemSelector(item)).click()
      }

    certificateWidget(){
        return cy.get(certificateWid)
    }

    milestoneWidget(){
        return cy.get(milestoneWid)
    }

    messageWidget(){
        return cy.get(msgWid)
    }

    syncStatusWidget(){
        return cy.get(syncStatusWid)
    }
}

export default ToolBarItems
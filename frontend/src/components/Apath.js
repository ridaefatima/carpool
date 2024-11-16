L.AstarCapableMixin = {
    // Gets the unique user ID
    getNodeId: function(user) {
        return user.user_id; // Use user_id as the unique identifier for each user
    },
    // Gets a list of nearby users based on their start_location (lat, long)
    getNearTo: function(ll) {
        // Find nearby users (this can involve a spatial search depending on your system)
        return this.users.filter(user => this._distance(user.start_location, ll) < some_threshold);
    },
    // Gets a list of users who are next in the route (can be other carpoolers)
    getNextTo: function(user) {
        // Return users who are in the vicinity or along the route based on user preferences
        return this.users.filter(nextUser => this._isNext(user, nextUser));
    },
    // Calculates the distance between two nodes (users) based on their start location
    getDistanceBetween: function(from_user, to_user) {
        return this._distance(from_user.start_location, to_user.start_location);
    },
    // Calculates the distance from a user to a target location (lat, long)
    getDistanceTo: function(user, ll) {
        return this._distance(user.start_location, ll); // Calculate the distance to the target
    },
    // Utility method to calculate distance between two lat/lng points
    _distance: function(ll1, ll2) {
        const lat1 = ll1[0], lon1 = ll1[1];
        const lat2 = ll2[0], lon2 = ll2[1];
        // Use the Haversine formula or a simple distance formula
        const R = 6371; // Earth radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in kilometers
    },
    // Check if user2 is next to user1 (based on max detour or preferences)
    _isNext: function(user1, user2) {
        const distance = this.getDistanceBetween(user1, user2);
        // Check if the user can detour to pick up user2 based on max detour distance and preferences
        return distance <= user1.max_detour_distance && user1.time_of_travel === user2.time_of_travel;
    }
};


/**
 * Command fired by Terminal
 */
Ext.define('Ext.ux.terminal.Command', {

    terminal: null,

    setTerminal: function(terminal)
    {
        this.terminal = terminal;
    },

    getTerminal: function()
    {
        return this.terminal;
    },

    setCommand: function(value)
    {
        this.value = value;
    },

    /**
     * Retrieve the command as text
     *
     * @param {Strin} index
     * @return {String}
     */
    getCommand: function(index)
    {
        if (typeof index === 'undefined') {
            return this.value;
        } else if (parseInt(index, 0) >= 0) {
            return this.getCommands()[index];
        }

        return null;
    },

    /**
     * Commands
     *
     * @return {Array}
     */
    getCommands: function()
    {
        return typeof this.value === 'string' ? this.value.split(' ') : [];
    },

    /**
     * Is the command handled?
     *
     * @return {Boolean}
     */
    isHandled: function()
    {
        return !!this.handled;
    },

    /**
     * Set the command as handled
     */
    handle: function()
    {
        this.handled = true;
    }
});
var HtmlEditingAPI = {};

(function(namespace) {

	/* https://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#concept-selection
	interface Selection {
		readonly attribute Node? anchorNode;
		readonly attribute unsigned long anchorOffset;
		readonly attribute Node? focusNode;
		readonly attribute unsigned long focusOffset;

		readonly attribute boolean isCollapsed;
		void               collapse(Node node, unsigned long offset);
		void               collapseToStart();
		void               collapseToEnd();

		void               extend(Node node, unsigned long offset);

		void               selectAllChildren(Node node);
		void               deleteFromDocument();

		readonly attribute unsigned long rangeCount;
		Range              getRangeAt(unsigned long index);
		void               addRange(Range range);
		void               removeRange(Range range);
		void               removeAllRanges();

		stringifier;

		// Additional properties and methods not in the standard but required for Chrome interop
		
		readonly attribute Node? baseNode;
		readonly attribute unsigned long baseOffset;
		readonly attribute Node? extentNode;
		readonly attribute unsigned long extentOffset;

		bool               containsNode(Node node);
		void               empty();
		void               modify(String alter, String direction, String granularity);
		void 			   setBaseAndExtent(Node base, unsigned long baseOffset, Node extent, unsigned long extentOffset);
		void               setPosition(Node node, unsigned long offset);
	}; */
	Selection = function() {}

	Selection.prototype = Object.create(Object.prototype, {
		anchorNode : {
			get: function() { return null; }
		},
		anchorOffset : {
			get: function() { return 0; }
		},
		baseNode : {
			get: function() { return null; }
		},
		baseOffset : {
			get: function() { return 0; }
		},
		extentNode : {
			get: function() { return null; }
		},
		extentOffset : {
			get: function() { return 0; }
		},
		focusNode : {
			get: function() { return null; }
		},
		focusOffset : {
			get: function() { return 0; }
		},
		isCollapsed : {
			get: function() { return true; }
		},
		rangeCount : {
			get: function() { return 0; }
		}
	});

	Selection.prototype.constructor = Selection;

	Selection.prototype.collapse = function(node, offset) {};
	Selection.prototype.collapseToStart = function() {};
	Selection.prototype.collapseToEnd = function() {};
	Selection.prototype.setPosition = function(node, offset) { return this.collapse(node, offset); };
	Selection.prototype.extend = function(node, offset) {};
	Selection.prototype.selectAllChildren = function(node) {};
	Selection.prototype.deleteFromDocument = function() {};
	Selection.prototype.getRangeAt = function(index) {};
	Selection.prototype.addRange = function(range) {};
	Selection.prototype.removeRange = function(range) {};
	Selection.prototype.removeAllRanges = function() {};
	Selection.prototype.toString = function() { return ""; };

	var selection = new Selection();
	
	namespace.getSelection = function() {
		return selection;
	}

})(/*namespace*/HtmlEditingAPI);
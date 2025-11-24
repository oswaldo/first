#!/bin/sh
# Install script for the 'first' tool
# Usage: curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh

set -e

# Configuration
REPO="oswaldo/first"
INSTALL_DIR="${FIRST_INSTALL_DIR:-$HOME/.local/bin}"
BINARY_NAME="first"

# Colors for output (using printf with literal escapes)
info() {
    printf '\033[0;32m==>\033[0m %s\n' "$1"
}

warn() {
    printf '\033[1;33mWarning:\033[0m %s\n' "$1"
}

error() {
    printf '\033[0;31mError:\033[0m %s\n' "$1" >&2
    exit 1
}

# Detect OS
detect_os() {
    case "$(uname -s)" in
        Darwin*) echo "macos" ;;
        Linux*)  echo "linux" ;;
        MINGW*|MSYS*|CYGWIN*) echo "windows" ;;
        *) error "Unsupported operating system: $(uname -s)" ;;
    esac
}

# Detect architecture
detect_arch() {
    case "$(uname -m)" in
        x86_64|amd64) echo "x86_64" ;;
        aarch64|arm64) echo "aarch64" ;;
        *) error "Unsupported architecture: $(uname -m)" ;;
    esac
}

# Get latest release version
get_latest_version() {
    if command -v curl >/dev/null 2>&1; then
        curl -fsSL "https://api.github.com/repos/$REPO/releases/latest" | \
            grep '"tag_name":' | \
            sed -E 's/.*"([^"]+)".*/\1/'
    else
        error "curl is required but not installed"
    fi
}

# Download and install
main() {
    info "Installing $BINARY_NAME..."
    
    OS=$(detect_os)
    ARCH=$(detect_arch)
    
    info "Detected platform: $OS-$ARCH"
    
    # Get latest version
    VERSION=$(get_latest_version)
    if [ -z "$VERSION" ]; then
        VERSION="latest"
        warn "Could not determine latest version, using 'latest'"
    else
        info "Latest version: $VERSION"
    fi
    
    # Construct download URL
    RELEASE_URL="https://github.com/$REPO/releases/download/$VERSION/first-$OS-$ARCH"
    
    # Create install directory
    mkdir -p "$INSTALL_DIR"
    
    # Download binary
    TEMP_FILE=$(mktemp)
    info "Downloading from $RELEASE_URL..."
    
    if ! curl -fsSL "$RELEASE_URL" -o "$TEMP_FILE"; then
        error "Failed to download $BINARY_NAME from $RELEASE_URL"
    fi
    
    # Make executable and move to install directory
    chmod +x "$TEMP_FILE"
    mv "$TEMP_FILE" "$INSTALL_DIR/$BINARY_NAME"
    
    info "Installed $BINARY_NAME to $INSTALL_DIR/$BINARY_NAME"
    
    # Verify installation
    if "$INSTALL_DIR/$BINARY_NAME" help >/dev/null 2>&1; then
        printf '\033[0;32m==>\033[0m \033[0;32m✓\033[0m Installation successful!\n'
    else
        warn "Binary installed but verification failed. Please check manually."
    fi
    
    # Check if install dir is in PATH
    case ":$PATH:" in
        *":$INSTALL_DIR:"*) ;;
        *)
            echo ""
            warn "$INSTALL_DIR is not in your PATH"
            echo "Add the following line to your ~/.bashrc or ~/.zshrc:"
            echo ""
            echo "  export PATH=\"\$PATH:$INSTALL_DIR\""
            echo ""
            ;;
    esac
    
    info "Run '$BINARY_NAME help' to get started!"
}

main "$@"
